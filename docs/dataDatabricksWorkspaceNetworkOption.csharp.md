# `dataDatabricksWorkspaceNetworkOption` Submodule <a name="`dataDatabricksWorkspaceNetworkOption` Submodule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceNetworkOption <a name="DataDatabricksWorkspaceNetworkOption" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/workspace_network_option databricks_workspace_network_option}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceNetworkOption(Construct Scope, string Id, DataDatabricksWorkspaceNetworkOptionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig">DataDatabricksWorkspaceNetworkOptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig">DataDatabricksWorkspaceNetworkOptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetNetworkPolicyId">ResetNetworkPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetNetworkPolicyId` <a name="ResetNetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetNetworkPolicyId"></a>

```csharp
private void ResetNetworkPolicyId()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksWorkspaceNetworkOption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceNetworkOption.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceNetworkOption.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceNetworkOption.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceNetworkOption.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksWorkspaceNetworkOption resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceNetworkOption to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceNetworkOption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/workspace_network_option#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceNetworkOption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyIdInput">NetworkPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyId">NetworkPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `NetworkPolicyIdInput`<sup>Optional</sup> <a name="NetworkPolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyIdInput"></a>

```csharp
public string NetworkPolicyIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `NetworkPolicyId`<sup>Required</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyId"></a>

```csharp
public string NetworkPolicyId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceNetworkOptionConfig <a name="DataDatabricksWorkspaceNetworkOptionConfig" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceNetworkOptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkPolicyId = null,
    double WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.networkPolicyId">NetworkPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/workspace_network_option#network_policy_id DataDatabricksWorkspaceNetworkOption#network_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/workspace_network_option#workspace_id DataDatabricksWorkspaceNetworkOption#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkPolicyId`<sup>Optional</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.networkPolicyId"></a>

```csharp
public string NetworkPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/workspace_network_option#network_policy_id DataDatabricksWorkspaceNetworkOption#network_policy_id}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/workspace_network_option#workspace_id DataDatabricksWorkspaceNetworkOption#workspace_id}.

---



