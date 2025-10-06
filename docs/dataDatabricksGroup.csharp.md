# `dataDatabricksGroup` Submodule <a name="`dataDatabricksGroup` Submodule" id="@cdktf/provider-databricks.dataDatabricksGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGroup <a name="DataDatabricksGroup" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group databricks_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksGroup(Construct Scope, string Id, DataDatabricksGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig">DataDatabricksGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig">DataDatabricksGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId">ResetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate">ResetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate">ResetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups">ResetChildGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess">ResetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles">ResetInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive">ResetRecursive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals">ResetServicePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers">ResetUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess">ResetWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceConsume">ResetWorkspaceConsume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAclPrincipalId` <a name="ResetAclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId"></a>

```csharp
private void ResetAclPrincipalId()
```

##### `ResetAllowClusterCreate` <a name="ResetAllowClusterCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate"></a>

```csharp
private void ResetAllowClusterCreate()
```

##### `ResetAllowInstancePoolCreate` <a name="ResetAllowInstancePoolCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate"></a>

```csharp
private void ResetAllowInstancePoolCreate()
```

##### `ResetChildGroups` <a name="ResetChildGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups"></a>

```csharp
private void ResetChildGroups()
```

##### `ResetDatabricksSqlAccess` <a name="ResetDatabricksSqlAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess"></a>

```csharp
private void ResetDatabricksSqlAccess()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceProfiles` <a name="ResetInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles"></a>

```csharp
private void ResetInstanceProfiles()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetRecursive` <a name="ResetRecursive" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive"></a>

```csharp
private void ResetRecursive()
```

##### `ResetServicePrincipals` <a name="ResetServicePrincipals" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals"></a>

```csharp
private void ResetServicePrincipals()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers"></a>

```csharp
private void ResetUsers()
```

##### `ResetWorkspaceAccess` <a name="ResetWorkspaceAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess"></a>

```csharp
private void ResetWorkspaceAccess()
```

##### `ResetWorkspaceConsume` <a name="ResetWorkspaceConsume" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceConsume"></a>

```csharp
private void ResetWorkspaceConsume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput">AclPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput">AllowClusterCreateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput">AllowInstancePoolCreateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput">ChildGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput">DatabricksSqlAccessInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput">InstanceProfilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput">RecursiveInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput">ServicePrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput">UsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput">WorkspaceAccessInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsumeInput">WorkspaceConsumeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId">AclPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups">ChildGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles">InstanceProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive">Recursive</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals">ServicePrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess">WorkspaceAccess</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsume">WorkspaceConsume</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AclPrincipalIdInput`<sup>Optional</sup> <a name="AclPrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput"></a>

```csharp
public string AclPrincipalIdInput { get; }
```

- *Type:* string

---

##### `AllowClusterCreateInput`<sup>Optional</sup> <a name="AllowClusterCreateInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput"></a>

```csharp
public bool|IResolvable AllowClusterCreateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowInstancePoolCreateInput`<sup>Optional</sup> <a name="AllowInstancePoolCreateInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput"></a>

```csharp
public bool|IResolvable AllowInstancePoolCreateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ChildGroupsInput`<sup>Optional</sup> <a name="ChildGroupsInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput"></a>

```csharp
public string[] ChildGroupsInput { get; }
```

- *Type:* string[]

---

##### `DatabricksSqlAccessInput`<sup>Optional</sup> <a name="DatabricksSqlAccessInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput"></a>

```csharp
public bool|IResolvable DatabricksSqlAccessInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceProfilesInput`<sup>Optional</sup> <a name="InstanceProfilesInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput"></a>

```csharp
public string[] InstanceProfilesInput { get; }
```

- *Type:* string[]

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `RecursiveInput`<sup>Optional</sup> <a name="RecursiveInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput"></a>

```csharp
public bool|IResolvable RecursiveInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ServicePrincipalsInput`<sup>Optional</sup> <a name="ServicePrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput"></a>

```csharp
public string[] ServicePrincipalsInput { get; }
```

- *Type:* string[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput"></a>

```csharp
public string[] UsersInput { get; }
```

- *Type:* string[]

---

##### `WorkspaceAccessInput`<sup>Optional</sup> <a name="WorkspaceAccessInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput"></a>

```csharp
public bool|IResolvable WorkspaceAccessInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `WorkspaceConsumeInput`<sup>Optional</sup> <a name="WorkspaceConsumeInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsumeInput"></a>

```csharp
public bool|IResolvable WorkspaceConsumeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AclPrincipalId`<sup>Required</sup> <a name="AclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId"></a>

```csharp
public string AclPrincipalId { get; }
```

- *Type:* string

---

##### `AllowClusterCreate`<sup>Required</sup> <a name="AllowClusterCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate"></a>

```csharp
public bool|IResolvable AllowClusterCreate { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowInstancePoolCreate`<sup>Required</sup> <a name="AllowInstancePoolCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate"></a>

```csharp
public bool|IResolvable AllowInstancePoolCreate { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ChildGroups`<sup>Required</sup> <a name="ChildGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups"></a>

```csharp
public string[] ChildGroups { get; }
```

- *Type:* string[]

---

##### `DatabricksSqlAccess`<sup>Required</sup> <a name="DatabricksSqlAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess"></a>

```csharp
public bool|IResolvable DatabricksSqlAccess { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceProfiles`<sup>Required</sup> <a name="InstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles"></a>

```csharp
public string[] InstanceProfiles { get; }
```

- *Type:* string[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive"></a>

```csharp
public bool|IResolvable Recursive { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ServicePrincipals`<sup>Required</sup> <a name="ServicePrincipals" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals"></a>

```csharp
public string[] ServicePrincipals { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess"></a>

```csharp
public bool|IResolvable WorkspaceAccess { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `WorkspaceConsume`<sup>Required</sup> <a name="WorkspaceConsume" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsume"></a>

```csharp
public bool|IResolvable WorkspaceConsume { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGroupConfig <a name="DataDatabricksGroupConfig" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string AclPrincipalId = null,
    bool|IResolvable AllowClusterCreate = null,
    bool|IResolvable AllowInstancePoolCreate = null,
    string[] ChildGroups = null,
    bool|IResolvable DatabricksSqlAccess = null,
    string ExternalId = null,
    string[] Groups = null,
    string Id = null,
    string[] InstanceProfiles = null,
    string[] Members = null,
    bool|IResolvable Recursive = null,
    string[] ServicePrincipals = null,
    string[] Users = null,
    bool|IResolvable WorkspaceAccess = null,
    bool|IResolvable WorkspaceConsume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId">AclPrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups">ChildGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#groups DataDatabricksGroup#groups}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#id DataDatabricksGroup#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles">InstanceProfiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#members DataDatabricksGroup#members}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive">Recursive</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals">ServicePrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users">Users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#users DataDatabricksGroup#users}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess">WorkspaceAccess</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceConsume">WorkspaceConsume</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}.

---

##### `AclPrincipalId`<sup>Optional</sup> <a name="AclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId"></a>

```csharp
public string AclPrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}.

---

##### `AllowClusterCreate`<sup>Optional</sup> <a name="AllowClusterCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate"></a>

```csharp
public bool|IResolvable AllowClusterCreate { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}.

---

##### `AllowInstancePoolCreate`<sup>Optional</sup> <a name="AllowInstancePoolCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate"></a>

```csharp
public bool|IResolvable AllowInstancePoolCreate { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}.

---

##### `ChildGroups`<sup>Optional</sup> <a name="ChildGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups"></a>

```csharp
public string[] ChildGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}.

---

##### `DatabricksSqlAccess`<sup>Optional</sup> <a name="DatabricksSqlAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess"></a>

```csharp
public bool|IResolvable DatabricksSqlAccess { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#groups DataDatabricksGroup#groups}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#id DataDatabricksGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceProfiles`<sup>Optional</sup> <a name="InstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles"></a>

```csharp
public string[] InstanceProfiles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#members DataDatabricksGroup#members}.

---

##### `Recursive`<sup>Optional</sup> <a name="Recursive" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive"></a>

```csharp
public bool|IResolvable Recursive { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}.

---

##### `ServicePrincipals`<sup>Optional</sup> <a name="ServicePrincipals" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals"></a>

```csharp
public string[] ServicePrincipals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}.

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users"></a>

```csharp
public string[] Users { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#users DataDatabricksGroup#users}.

---

##### `WorkspaceAccess`<sup>Optional</sup> <a name="WorkspaceAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess"></a>

```csharp
public bool|IResolvable WorkspaceAccess { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}.

---

##### `WorkspaceConsume`<sup>Optional</sup> <a name="WorkspaceConsume" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceConsume"></a>

```csharp
public bool|IResolvable WorkspaceConsume { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}.

---



