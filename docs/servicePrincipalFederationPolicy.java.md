# `servicePrincipalFederationPolicy` Submodule <a name="`servicePrincipalFederationPolicy` Submodule" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalFederationPolicy <a name="ServicePrincipalFederationPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy databricks_service_principal_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicy;

ServicePrincipalFederationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .oidcPolicy(ServicePrincipalFederationPolicyOidcPolicy)
//  .policyId(java.lang.String)
//  .servicePrincipalId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.oidcPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.servicePrincipalId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy"></a>

```java
public void putOidcPolicy(ServicePrincipalFederationPolicyOidcPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOidcPolicy"></a>

```java
public void resetOidcPolicy()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetServicePrincipalId"></a>

```java
public void resetServicePrincipalId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicy;

ServicePrincipalFederationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicy;

ServicePrincipalFederationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicy;

ServicePrincipalFederationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicy;

ServicePrincipalFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicePrincipalFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicePrincipalFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicePrincipalFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference">ServicePrincipalFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicy"></a>

```java
public ServicePrincipalFederationPolicyOidcPolicyOutputReference getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference">ServicePrincipalFederationPolicyOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicyInput"></a>

```java
public IResolvable|ServicePrincipalFederationPolicyOidcPolicy getOidcPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalIdInput"></a>

```java
public java.lang.Number getServicePrincipalIdInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalFederationPolicyConfig <a name="ServicePrincipalFederationPolicyConfig" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicyConfig;

ServicePrincipalFederationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .oidcPolicy(ServicePrincipalFederationPolicyOidcPolicy)
//  .policyId(java.lang.String)
//  .servicePrincipalId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.oidcPolicy"></a>

```java
public ServicePrincipalFederationPolicyOidcPolicy getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}.

---

### ServicePrincipalFederationPolicyOidcPolicy <a name="ServicePrincipalFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicyOidcPolicy;

ServicePrincipalFederationPolicyOidcPolicy.builder()
//  .audiences(java.util.List<java.lang.String>)
//  .issuer(java.lang.String)
//  .jwksJson(java.lang.String)
//  .jwksUri(java.lang.String)
//  .subject(java.lang.String)
//  .subjectClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#audiences ServicePrincipalFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#issuer ServicePrincipalFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#jwks_json ServicePrincipalFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#jwks_uri ServicePrincipalFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#subject ServicePrincipalFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#subject_claim ServicePrincipalFederationPolicy#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#audiences ServicePrincipalFederationPolicy#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#issuer ServicePrincipalFederationPolicy#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#jwks_json ServicePrincipalFederationPolicy#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#jwks_uri ServicePrincipalFederationPolicy#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#subject ServicePrincipalFederationPolicy#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal_federation_policy#subject_claim ServicePrincipalFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalFederationPolicyOidcPolicyOutputReference <a name="ServicePrincipalFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal_federation_policy.ServicePrincipalFederationPolicyOidcPolicyOutputReference;

new ServicePrincipalFederationPolicyOidcPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```java
public void resetJwksJson()
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```java
public void resetJwksUri()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```java
public void resetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```java
public java.lang.String getJwksJsonInput();
```

- *Type:* java.lang.String

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```java
public java.lang.String getSubjectClaimInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicePrincipalFederationPolicyOidcPolicy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---



