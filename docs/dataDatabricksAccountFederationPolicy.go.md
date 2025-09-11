# `dataDatabricksAccountFederationPolicy` Submodule <a name="`dataDatabricksAccountFederationPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountFederationPolicy <a name="DataDatabricksAccountFederationPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy databricks_account_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

datadatabricksaccountfederationpolicy.NewDataDatabricksAccountFederationPolicy(scope Construct, id *string, config DataDatabricksAccountFederationPolicyConfig) DataDatabricksAccountFederationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig">DataDatabricksAccountFederationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig">DataDatabricksAccountFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.putOidcPolicy">PutOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOidcPolicy">ResetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOidcPolicy` <a name="PutOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.putOidcPolicy"></a>

```go
func PutOidcPolicy(value DataDatabricksAccountFederationPolicyOidcPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOidcPolicy` <a name="ResetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOidcPolicy"></a>

```go
func ResetOidcPolicy()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetServicePrincipalId"></a>

```go
func ResetServicePrincipalId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

datadatabricksaccountfederationpolicy.DataDatabricksAccountFederationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

datadatabricksaccountfederationpolicy.DataDatabricksAccountFederationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

datadatabricksaccountfederationpolicy.DataDatabricksAccountFederationPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

datadatabricksaccountfederationpolicy.DataDatabricksAccountFederationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksAccountFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAccountFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAccountFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference">DataDatabricksAccountFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicyInput">OidcPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicy"></a>

```go
func OidcPolicy() DataDatabricksAccountFederationPolicyOidcPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference">DataDatabricksAccountFederationPolicyOidcPolicyOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `OidcPolicyInput`<sup>Optional</sup> <a name="OidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicyInput"></a>

```go
func OidcPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountFederationPolicyConfig <a name="DataDatabricksAccountFederationPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

&datadatabricksaccountfederationpolicy.DataDatabricksAccountFederationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	OidcPolicy: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy,
	PolicyId: *string,
	ServicePrincipalId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#description DataDatabricksAccountFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#oidc_policy DataDatabricksAccountFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#policy_id DataDatabricksAccountFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#service_principal_id DataDatabricksAccountFederationPolicy#service_principal_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#description DataDatabricksAccountFederationPolicy#description}.

---

##### `OidcPolicy`<sup>Optional</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.oidcPolicy"></a>

```go
OidcPolicy DataDatabricksAccountFederationPolicyOidcPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#oidc_policy DataDatabricksAccountFederationPolicy#oidc_policy}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#policy_id DataDatabricksAccountFederationPolicy#policy_id}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#service_principal_id DataDatabricksAccountFederationPolicy#service_principal_id}.

---

### DataDatabricksAccountFederationPolicyOidcPolicy <a name="DataDatabricksAccountFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

&datadatabricksaccountfederationpolicy.DataDatabricksAccountFederationPolicyOidcPolicy {
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.audiences">Audiences</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#audiences DataDatabricksAccountFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#issuer DataDatabricksAccountFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksJson">JwksJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#jwks_json DataDatabricksAccountFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksUri">JwksUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#jwks_uri DataDatabricksAccountFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subject">Subject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#subject DataDatabricksAccountFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#subject_claim DataDatabricksAccountFederationPolicy#subject_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#audiences DataDatabricksAccountFederationPolicy#audiences}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#issuer DataDatabricksAccountFederationPolicy#issuer}.

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksJson"></a>

```go
JwksJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#jwks_json DataDatabricksAccountFederationPolicy#jwks_json}.

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksUri"></a>

```go
JwksUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#jwks_uri DataDatabricksAccountFederationPolicy#jwks_uri}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#subject DataDatabricksAccountFederationPolicy#subject}.

---

##### `SubjectClaim`<sup>Optional</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subjectClaim"></a>

```go
SubjectClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/account_federation_policy#subject_claim DataDatabricksAccountFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountFederationPolicyOidcPolicyOutputReference <a name="DataDatabricksAccountFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksaccountfederationpolicy"

datadatabricksaccountfederationpolicy.NewDataDatabricksAccountFederationPolicyOidcPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAccountFederationPolicyOidcPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">ResetSubjectClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```go
func ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```go
func ResetJwksJson()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```go
func ResetJwksUri()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```go
func ResetSubject()
```

##### `ResetSubjectClaim` <a name="ResetSubjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```go
func ResetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJson">JwksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUri">JwksUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```go
func JwksJsonInput() *string
```

- *Type:* *string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```go
func JwksUriInput() *string
```

- *Type:* *string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```go
func SubjectClaimInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```go
func JwksJson() *string
```

- *Type:* *string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```go
func JwksUri() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```go
func SubjectClaim() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



