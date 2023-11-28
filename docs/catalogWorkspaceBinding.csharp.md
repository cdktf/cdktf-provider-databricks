# `catalogWorkspaceBinding` Submodule <a name="`catalogWorkspaceBinding` Submodule" id="@cdktf/provider-databricks.catalogWorkspaceBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogWorkspaceBinding <a name="CatalogWorkspaceBinding" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding databricks_catalog_workspace_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CatalogWorkspaceBinding(Construct Scope, string Id, CatalogWorkspaceBindingConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig">CatalogWorkspaceBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig">CatalogWorkspaceBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType">ResetBindingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName">ResetSecurableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType">ResetSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetBindingType` <a name="ResetBindingType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType"></a>

```csharp
private void ResetBindingType()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurableName` <a name="ResetSecurableName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName"></a>

```csharp
private void ResetSecurableName()
```

##### `ResetSecurableType` <a name="ResetSecurableType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType"></a>

```csharp
private void ResetSecurableType()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CatalogWorkspaceBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CatalogWorkspaceBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CatalogWorkspaceBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CatalogWorkspaceBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CatalogWorkspaceBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CatalogWorkspaceBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CatalogWorkspaceBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CatalogWorkspaceBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CatalogWorkspaceBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput">BindingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput">SecurableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType">BindingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName">SecurableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BindingTypeInput`<sup>Optional</sup> <a name="BindingTypeInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput"></a>

```csharp
public string BindingTypeInput { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecurableNameInput`<sup>Optional</sup> <a name="SecurableNameInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput"></a>

```csharp
public string SecurableNameInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `BindingType`<sup>Required</sup> <a name="BindingType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType"></a>

```csharp
public string BindingType { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurableName`<sup>Required</sup> <a name="SecurableName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName"></a>

```csharp
public string SecurableName { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogWorkspaceBindingConfig <a name="CatalogWorkspaceBindingConfig" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CatalogWorkspaceBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BindingType = null,
    string CatalogName = null,
    string Id = null,
    string SecurableName = null,
    string SecurableType = null,
    double WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType">BindingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName">SecurableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BindingType`<sup>Optional</sup> <a name="BindingType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType"></a>

```csharp
public string BindingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurableName`<sup>Optional</sup> <a name="SecurableName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName"></a>

```csharp
public string SecurableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}.

---

##### `SecurableType`<sup>Optional</sup> <a name="SecurableType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}.

---



