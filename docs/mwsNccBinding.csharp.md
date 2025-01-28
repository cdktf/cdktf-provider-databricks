# `mwsNccBinding` Submodule <a name="`mwsNccBinding` Submodule" id="@cdktf/provider-databricks.mwsNccBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNccBinding <a name="MwsNccBinding" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding databricks_mws_ncc_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNccBinding(Construct Scope, string Id, MwsNccBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig">MwsNccBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig">MwsNccBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNccBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MwsNccBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsNccBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsNccBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MwsNccBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.networkConnectivityConfigIdInput"></a>

```csharp
public string NetworkConnectivityConfigIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNccBindingConfig <a name="MwsNccBindingConfig" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNccBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkConnectivityConfigId,
    double WorkspaceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding#network_connectivity_config_id MwsNccBinding#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding#workspace_id MwsNccBinding#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding#id MwsNccBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding#network_connectivity_config_id MwsNccBinding#network_connectivity_config_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding#workspace_id MwsNccBinding#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccBinding.MwsNccBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mws_ncc_binding#id MwsNccBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



