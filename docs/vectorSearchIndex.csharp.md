# `vectorSearchIndex` Submodule <a name="`vectorSearchIndex` Submodule" id="@cdktf/provider-databricks.vectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchIndex <a name="VectorSearchIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index databricks_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndex(Construct Scope, string Id, VectorSearchIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec">PutDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec">PutDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec">ResetDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec">ResetDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeltaSyncIndexSpec` <a name="PutDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec"></a>

```csharp
private void PutDeltaSyncIndexSpec(VectorSearchIndexDeltaSyncIndexSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `PutDirectAccessIndexSpec` <a name="PutDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec"></a>

```csharp
private void PutDirectAccessIndexSpec(VectorSearchIndexDirectAccessIndexSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts"></a>

```csharp
private void PutTimeouts(VectorSearchIndexTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `ResetDeltaSyncIndexSpec` <a name="ResetDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec"></a>

```csharp
private void ResetDeltaSyncIndexSpec()
```

##### `ResetDirectAccessIndexSpec` <a name="ResetDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec"></a>

```csharp
private void ResetDirectAccessIndexSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

VectorSearchIndex.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

VectorSearchIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

VectorSearchIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

VectorSearchIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VectorSearchIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status">Status</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput">DeltaSyncIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput">DirectAccessIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput">IndexTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType">IndexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeltaSyncIndexSpec`<sup>Required</sup> <a name="DeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec"></a>

```csharp
public VectorSearchIndexDeltaSyncIndexSpecOutputReference DeltaSyncIndexSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `DirectAccessIndexSpec`<sup>Required</sup> <a name="DirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec"></a>

```csharp
public VectorSearchIndexDirectAccessIndexSpecOutputReference DirectAccessIndexSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status"></a>

```csharp
public VectorSearchIndexStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts"></a>

```csharp
public VectorSearchIndexTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a>

---

##### `DeltaSyncIndexSpecInput`<sup>Optional</sup> <a name="DeltaSyncIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput"></a>

```csharp
public VectorSearchIndexDeltaSyncIndexSpec DeltaSyncIndexSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `DirectAccessIndexSpecInput`<sup>Optional</sup> <a name="DirectAccessIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput"></a>

```csharp
public VectorSearchIndexDirectAccessIndexSpec DirectAccessIndexSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexTypeInput`<sup>Optional</sup> <a name="IndexTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput"></a>

```csharp
public string IndexTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType"></a>

```csharp
public string IndexType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchIndexConfig <a name="VectorSearchIndexConfig" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndpointName,
    string IndexType,
    string Name,
    string PrimaryKey,
    VectorSearchIndexDeltaSyncIndexSpec DeltaSyncIndexSpec = null,
    VectorSearchIndexDirectAccessIndexSpec DirectAccessIndexSpec = null,
    string Id = null,
    VectorSearchIndexTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName">EndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType">IndexType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | delta_sync_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | direct_access_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}.

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType"></a>

```csharp
public string IndexType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}.

---

##### `DeltaSyncIndexSpec`<sup>Optional</sup> <a name="DeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec"></a>

```csharp
public VectorSearchIndexDeltaSyncIndexSpec DeltaSyncIndexSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

delta_sync_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#delta_sync_index_spec VectorSearchIndex#delta_sync_index_spec}

---

##### `DirectAccessIndexSpec`<sup>Optional</sup> <a name="DirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec"></a>

```csharp
public VectorSearchIndexDirectAccessIndexSpec DirectAccessIndexSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

direct_access_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#direct_access_index_spec VectorSearchIndex#direct_access_index_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts"></a>

```csharp
public VectorSearchIndexTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

### VectorSearchIndexDeltaSyncIndexSpec <a name="VectorSearchIndexDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpec {
    object EmbeddingSourceColumns = null,
    object EmbeddingVectorColumns = null,
    string EmbeddingWritebackTable = null,
    string PipelineType = null,
    string SourceTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>object</code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>object</code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType">PipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable">SourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}. |

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public object EmbeddingSourceColumns { get; set; }
```

- *Type:* object

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public object EmbeddingVectorColumns { get; set; }
```

- *Type:* object

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `EmbeddingWritebackTable`<sup>Optional</sup> <a name="EmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}.

---

##### `PipelineType`<sup>Optional</sup> <a name="PipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```csharp
public string PipelineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}.

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```csharp
public string SourceTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpointName = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingModelEndpointName`<sup>Optional</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```csharp
public string EmbeddingModelEndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpec <a name="VectorSearchIndexDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpec {
    object EmbeddingSourceColumns = null,
    object EmbeddingVectorColumns = null,
    string SchemaJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>object</code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>object</code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson">SchemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}. |

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public object EmbeddingSourceColumns { get; set; }
```

- *Type:* object

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public object EmbeddingVectorColumns { get; set; }
```

- *Type:* object

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `SchemaJson`<sup>Optional</sup> <a name="SchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```csharp
public string SchemaJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpointName = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingModelEndpointName`<sup>Optional</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```csharp
public string EmbeddingModelEndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexStatus <a name="VectorSearchIndexStatus" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexStatus {

};
```


### VectorSearchIndexTimeouts <a name="VectorSearchIndexTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#create VectorSearchIndex#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/vector_search_index#create VectorSearchIndex#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">ResetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpointName` <a name="ResetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```csharp
private void ResetEmbeddingModelEndpointName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">EmbeddingModelEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointNameInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```csharp
public string EmbeddingModelEndpointNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointName`<sup>Required</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```csharp
public string EmbeddingModelEndpointName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDeltaSyncIndexSpecOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDeltaSyncIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">ResetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType">ResetPipelineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* object

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* object

---

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetEmbeddingWritebackTable` <a name="ResetEmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```csharp
private void ResetEmbeddingWritebackTable()
```

##### `ResetPipelineType` <a name="ResetPipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType"></a>

```csharp
private void ResetPipelineType()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```csharp
private void ResetSourceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">EmbeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">PipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">PipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">SourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public object EmbeddingSourceColumnsInput { get; }
```

- *Type:* object

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public object EmbeddingVectorColumnsInput { get; }
```

- *Type:* object

---

##### `EmbeddingWritebackTableInput`<sup>Optional</sup> <a name="EmbeddingWritebackTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```csharp
public string EmbeddingWritebackTableInput { get; }
```

- *Type:* string

---

##### `PipelineTypeInput`<sup>Optional</sup> <a name="PipelineTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```csharp
public string PipelineTypeInput { get; }
```

- *Type:* string

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```csharp
public string SourceTableInput { get; }
```

- *Type:* string

---

##### `EmbeddingWritebackTable`<sup>Required</sup> <a name="EmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; }
```

- *Type:* string

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```csharp
public string PipelineType { get; }
```

- *Type:* string

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```csharp
public string SourceTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```csharp
public VectorSearchIndexDeltaSyncIndexSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">ResetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpointName` <a name="ResetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```csharp
private void ResetEmbeddingModelEndpointName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">EmbeddingModelEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointNameInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```csharp
public string EmbeddingModelEndpointNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointName`<sup>Required</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```csharp
public string EmbeddingModelEndpointName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VectorSearchIndexDirectAccessIndexSpecOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexDirectAccessIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">ResetSchemaJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* object

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* object

---

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetSchemaJson` <a name="ResetSchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```csharp
private void ResetSchemaJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">SchemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">SchemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public object EmbeddingSourceColumnsInput { get; }
```

- *Type:* object

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public object EmbeddingVectorColumnsInput { get; }
```

- *Type:* object

---

##### `SchemaJsonInput`<sup>Optional</sup> <a name="SchemaJsonInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```csharp
public string SchemaJsonInput { get; }
```

- *Type:* string

---

##### `SchemaJson`<sup>Required</sup> <a name="SchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```csharp
public string SchemaJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```csharp
public VectorSearchIndexDirectAccessIndexSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---


### VectorSearchIndexStatusList <a name="VectorSearchIndexStatusList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get"></a>

```csharp
private VectorSearchIndexStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VectorSearchIndexStatusOutputReference <a name="VectorSearchIndexStatusOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount">IndexedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl">IndexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready">Ready</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedRowCount`<sup>Required</sup> <a name="IndexedRowCount" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```csharp
public double IndexedRowCount { get; }
```

- *Type:* double

---

##### `IndexUrl`<sup>Required</sup> <a name="IndexUrl" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl"></a>

```csharp
public string IndexUrl { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready"></a>

```csharp
public IResolvable Ready { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue"></a>

```csharp
public VectorSearchIndexStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a>

---


### VectorSearchIndexTimeoutsOutputReference <a name="VectorSearchIndexTimeoutsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new VectorSearchIndexTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



