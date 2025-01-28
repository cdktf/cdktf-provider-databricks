# `azureBlobMount` Submodule <a name="`azureBlobMount` Submodule" id="@cdktf/provider-databricks.azureBlobMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureBlobMount <a name="AzureBlobMount" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount databricks_azure_blob_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AzureBlobMount(Construct Scope, string Id, AzureBlobMountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig">AzureBlobMountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig">AzureBlobMountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AzureBlobMount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AzureBlobMount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AzureBlobMount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AzureBlobMount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureBlobMount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureBlobMount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AzureBlobMount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput">MountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput">TokenSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput">TokenSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName">MountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey">TokenSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope">TokenSecretScope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountNameInput`<sup>Optional</sup> <a name="MountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput"></a>

```csharp
public string MountNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `TokenSecretKeyInput`<sup>Optional</sup> <a name="TokenSecretKeyInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput"></a>

```csharp
public string TokenSecretKeyInput { get; }
```

- *Type:* string

---

##### `TokenSecretScopeInput`<sup>Optional</sup> <a name="TokenSecretScopeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput"></a>

```csharp
public string TokenSecretScopeInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName"></a>

```csharp
public string MountName { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `TokenSecretKey`<sup>Required</sup> <a name="TokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey"></a>

```csharp
public string TokenSecretKey { get; }
```

- *Type:* string

---

##### `TokenSecretScope`<sup>Required</sup> <a name="TokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope"></a>

```csharp
public string TokenSecretScope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureBlobMountConfig <a name="AzureBlobMountConfig" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AzureBlobMountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthType,
    string ContainerName,
    string MountName,
    string StorageAccountName,
    string TokenSecretKey,
    string TokenSecretScope,
    string ClusterId = null,
    string Directory = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName">MountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey">TokenSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope">TokenSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory">Directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}.

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName"></a>

```csharp
public string MountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}.

---

##### `TokenSecretKey`<sup>Required</sup> <a name="TokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey"></a>

```csharp
public string TokenSecretKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}.

---

##### `TokenSecretScope`<sup>Required</sup> <a name="TokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope"></a>

```csharp
public string TokenSecretScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



