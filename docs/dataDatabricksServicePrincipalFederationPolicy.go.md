# `dataDatabricksServicePrincipalFederationPolicy` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicy <a name="DataDatabricksServicePrincipalFederationPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy databricks_service_principal_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

datadatabricksserviceprincipalfederationpolicy.NewDataDatabricksServicePrincipalFederationPolicy(scope Construct, id *string, config DataDatabricksServicePrincipalFederationPolicyConfig) DataDatabricksServicePrincipalFederationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig">DataDatabricksServicePrincipalFederationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.config"></a>

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

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOidcPolicy` <a name="PutOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy"></a>

```go
func PutOidcPolicy(value DataDatabricksServicePrincipalFederationPolicyOidcPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOidcPolicy` <a name="ResetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOidcPolicy"></a>

```go
func ResetOidcPolicy()
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

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

datadatabricksserviceprincipalfederationpolicy.DataDatabricksServicePrincipalFederationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

datadatabricksserviceprincipalfederationpolicy.DataDatabricksServicePrincipalFederationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

datadatabricksserviceprincipalfederationpolicy.DataDatabricksServicePrincipalFederationPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

datadatabricksserviceprincipalfederationpolicy.DataDatabricksServicePrincipalFederationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksServicePrincipalFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicyInput">OidcPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy"></a>

```go
func OidcPolicy() DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *f64
```

- *Type:* *f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `OidcPolicyInput`<sup>Optional</sup> <a name="OidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicyInput"></a>

```go
func OidcPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPolicyConfig <a name="DataDatabricksServicePrincipalFederationPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

&datadatabricksserviceprincipalfederationpolicy.DataDatabricksServicePrincipalFederationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	OidcPolicy: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#description DataDatabricksServicePrincipalFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#oidc_policy DataDatabricksServicePrincipalFederationPolicy#oidc_policy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#description DataDatabricksServicePrincipalFederationPolicy#description}.

---

##### `OidcPolicy`<sup>Optional</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.oidcPolicy"></a>

```go
OidcPolicy DataDatabricksServicePrincipalFederationPolicyOidcPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#oidc_policy DataDatabricksServicePrincipalFederationPolicy#oidc_policy}.

---

### DataDatabricksServicePrincipalFederationPolicyOidcPolicy <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

&datadatabricksserviceprincipalfederationpolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy {
	Audiences: *[]*string,
	Issuer: *string,
	JwksJson: *string,
	JwksUri: *string,
	Subject: *string,
	SubjectClaim: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences">Audiences</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson">JwksJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri">JwksUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject">Subject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}.

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson"></a>

```go
JwksJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}.

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri"></a>

```go
JwksUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}.

---

##### `SubjectClaim`<sup>Optional</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim"></a>

```go
SubjectClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksserviceprincipalfederationpolicy"

datadatabricksserviceprincipalfederationpolicy.NewDataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```go
func ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```go
func ResetJwksJson()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```go
func ResetJwksUri()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```go
func ResetSubject()
```

##### `ResetSubjectClaim` <a name="ResetSubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```go
func ResetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson">JwksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri">JwksUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```go
func JwksJsonInput() *string
```

- *Type:* *string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```go
func JwksUriInput() *string
```

- *Type:* *string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```go
func SubjectClaimInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```go
func JwksJson() *string
```

- *Type:* *string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```go
func JwksUri() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```go
func SubjectClaim() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



