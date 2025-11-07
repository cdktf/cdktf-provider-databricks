# `workspaceNetworkOption` Submodule <a name="`workspaceNetworkOption` Submodule" id="@cdktf/provider-databricks.workspaceNetworkOption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceNetworkOption <a name="WorkspaceNetworkOption" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/workspace_network_option databricks_workspace_network_option}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceNetworkOption(Construct Scope, string Id, WorkspaceNetworkOptionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig">WorkspaceNetworkOptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig">WorkspaceNetworkOptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.resetNetworkPolicyId">ResetNetworkPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNetworkPolicyId` <a name="ResetNetworkPolicyId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.resetNetworkPolicyId"></a>

```csharp
private void ResetNetworkPolicyId()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceNetworkOption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceNetworkOption.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceNetworkOption.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceNetworkOption.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceNetworkOption.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspaceNetworkOption resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceNetworkOption to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceNetworkOption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/workspace_network_option#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceNetworkOption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.networkPolicyIdInput">NetworkPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.networkPolicyId">NetworkPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `NetworkPolicyIdInput`<sup>Optional</sup> <a name="NetworkPolicyIdInput" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.networkPolicyIdInput"></a>

```csharp
public string NetworkPolicyIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `NetworkPolicyId`<sup>Required</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.networkPolicyId"></a>

```csharp
public string NetworkPolicyId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOption.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceNetworkOptionConfig <a name="WorkspaceNetworkOptionConfig" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceNetworkOptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NetworkPolicyId = null,
    double WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.networkPolicyId">NetworkPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/workspace_network_option#network_policy_id WorkspaceNetworkOption#network_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/workspace_network_option#workspace_id WorkspaceNetworkOption#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `NetworkPolicyId`<sup>Optional</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.networkPolicyId"></a>

```csharp
public string NetworkPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/workspace_network_option#network_policy_id WorkspaceNetworkOption#network_policy_id}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.workspaceNetworkOption.WorkspaceNetworkOptionConfig.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/workspace_network_option#workspace_id WorkspaceNetworkOption#workspace_id}.

---



