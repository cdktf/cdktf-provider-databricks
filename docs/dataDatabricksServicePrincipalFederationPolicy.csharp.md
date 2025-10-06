# `dataDatabricksServicePrincipalFederationPolicy` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicy <a name="DataDatabricksServicePrincipalFederationPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy databricks_service_principal_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipalFederationPolicy(Construct Scope, string Id, DataDatabricksServicePrincipalFederationPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig">DataDatabricksServicePrincipalFederationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig">DataDatabricksServicePrincipalFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy">PutOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOidcPolicy">ResetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutOidcPolicy` <a name="PutOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy"></a>

```csharp
private void PutOidcPolicy(DataDatabricksServicePrincipalFederationPolicyOidcPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetOidcPolicy` <a name="ResetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOidcPolicy"></a>

```csharp
private void ResetOidcPolicy()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetServicePrincipalId"></a>

```csharp
private void ResetServicePrincipalId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipalFederationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipalFederationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipalFederationPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipalFederationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksServicePrincipalFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicyInput">OidcPolicyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy"></a>

```csharp
public DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference OidcPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `OidcPolicyInput`<sup>Optional</sup> <a name="OidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicyInput"></a>

```csharp
public IResolvable|DataDatabricksServicePrincipalFederationPolicyOidcPolicy OidcPolicyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalIdInput"></a>

```csharp
public double ServicePrincipalIdInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPolicyConfig <a name="DataDatabricksServicePrincipalFederationPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipalFederationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    DataDatabricksServicePrincipalFederationPolicyOidcPolicy OidcPolicy = null,
    string PolicyId = null,
    double ServicePrincipalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#description DataDatabricksServicePrincipalFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#oidc_policy DataDatabricksServicePrincipalFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#policy_id DataDatabricksServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#service_principal_id DataDatabricksServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#description DataDatabricksServicePrincipalFederationPolicy#description}.

---

##### `OidcPolicy`<sup>Optional</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.oidcPolicy"></a>

```csharp
public DataDatabricksServicePrincipalFederationPolicyOidcPolicy OidcPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#oidc_policy DataDatabricksServicePrincipalFederationPolicy#oidc_policy}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#policy_id DataDatabricksServicePrincipalFederationPolicy#policy_id}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#service_principal_id DataDatabricksServicePrincipalFederationPolicy#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPolicyOidcPolicy <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipalFederationPolicyOidcPolicy {
    string[] Audiences = null,
    string Issuer = null,
    string JwksJson = null,
    string JwksUri = null,
    string Subject = null,
    string SubjectClaim = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences">Audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson">JwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri">JwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}.

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson"></a>

```csharp
public string JwksJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}.

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri"></a>

```csharp
public string JwksUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}.

---

##### `SubjectClaim`<sup>Optional</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">ResetSubjectClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```csharp
private void ResetJwksJson()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```csharp
private void ResetJwksUri()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetSubjectClaim` <a name="ResetSubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```csharp
private void ResetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson">JwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri">JwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```csharp
public string JwksJsonInput { get; }
```

- *Type:* string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```csharp
public string JwksUriInput { get; }
```

- *Type:* string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```csharp
public string SubjectClaimInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```csharp
public string JwksJson { get; }
```

- *Type:* string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```csharp
public string JwksUri { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksServicePrincipalFederationPolicyOidcPolicy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---



